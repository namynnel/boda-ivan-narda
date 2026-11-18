// El dashboard conserva invitación, RSVP y datos; la edición de mesas vive en el taller.
(function(){
const originalSchedule=scheduleCfgSync;scheduleCfgSync=function(name){if(name!=='mesas')return originalSchedule(name)};
const originalPush=pushCfg;pushCfg=function(name){if(name!=='mesas')return originalPush(name)};
// Refresh the dashboard after returning from the editor, including the browser's back cache.
let seatingRevision=-1,lastSeatingRead=0;
const originalApply=applyCfg;applyCfg=function(name,value){if(name==='mesas'&&value){const revision=Number(value.revision||0);if(revision<seatingRevision)return;seatingRevision=revision;cfgPending.mesas=false;}return originalApply(name,value)};
function refreshSeating(){if(!adminKey()||document.hidden||Date.now()-lastSeatingRead<1500)return;lastSeatingRead=Date.now();fetchCfg('mesas',value=>applyCfg('mesas',value));}
window.addEventListener('pageshow',refreshSeating);window.addEventListener('focus',refreshSeating);document.addEventListener('visibilitychange',refreshSeating);
const originalRefresh=refreshRSVP;refreshRSVP=function(){originalRefresh();lastSeatingRead=0;refreshSeating()};
refreshSeating();
openMesaModal=function(code){location.href='plano-editor.html?codigo='+encodeURIComponent(code)};
document.querySelectorAll('.tab').forEach(el=>{if(/switchTab\('(mesas|plano)'/.test(el.getAttribute('onclick')||''))el.remove()});
const tab=document.createElement('a');tab.className='btn btn-olive organizer-link';tab.href='plano-editor.html';tab.textContent='🗺️ Organizador del salón';tab.style.textDecoration='none';tab.style.marginLeft='auto';tab.style.marginRight='1rem';tab.style.alignSelf='center';document.querySelector('.tab')?.parentElement.append(tab);
const linkInput=document.getElementById('plano-link-input');if(linkInput){const copy=document.createElement('button');copy.type='button';copy.className='btn btn-ghost';copy.textContent='Copiar enlace para invitados';copy.style.marginTop='.5rem';copy.onclick=async()=>{const url=getPlanoLink();if(!isHttpUrl(url)){alert('Introduce un enlace completo que empiece con https://');return}try{await navigator.clipboard.writeText(url);document.getElementById('plano-link-status').textContent='✓ Enlace copiado. Cada invitado usará su propio código.'}catch{linkInput.value=url;linkInput.select();document.getElementById('plano-link-status').textContent='Seleccionado: copia el enlace con Ctrl+C o mantén pulsado para copiar.'}};linkInput.parentElement.after(copy);}
})();
