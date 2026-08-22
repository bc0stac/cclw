function tick(){
  const el=document.getElementById("clock");
  if(!el) return;
  const now=new Date();
  el.textContent=new Intl.DateTimeFormat("ca-ES",{
    year:"numeric",month:"2-digit",day:"2-digit",
    hour:"2-digit",minute:"2-digit",second:"2-digit",
    hour12:false,timeZone:"Europe/Madrid"
  }).format(now).replace(",", "");
}
tick(); setInterval(tick,1000);
