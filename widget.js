window.onload=function(){let e,t,l;e=document.getElementById("vp-script").src,t="http://127.0.0.1:8080/w/"+new URL(e,window.location).searchParams.get("vp_widget_id"),(l=document.createElement("button")).innerHTML="Verify Authenticity",l.style.position="fixed",l.style.bottom="20px",l.style.right="20px",l.style.zIndex=9999,l.style.borderRadius="20px",l.style.padding="10px 20px",l.style.color="white",l.style.backgroundImage="linear-gradient(to right, #ff7e5f, #feb47b)",l.style.border="none",l.style.cursor="pointer",l.addEventListener("click",function(){let e=document.createElement("div");e.style.display="none",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="rgba(0,0,0,0.5)",e.style.zIndex=9999;let l=document.createElement("div");l.style.backgroundColor="white",l.style.padding="20px",l.style.borderRadius="10px",l.style.maxWidth="800px",l.style.height="100%",l.style.margin="auto";let i=document.createElement("button");i.innerHTML="Close",i.style.position="absolute",i.style.top="20px",i.style.right="20px",i.style.borderRadius="20px",i.style.padding="10px 20px",i.style.color="white",i.style.backgroundImage="linear-gradient(to right, #ff7e5f, #feb47b)",i.style.border="none",i.style.cursor="pointer";let n=document.createElement("iframe");n.src=t,n.style.border="none",n.style.width="100%",n.style.height="100%",l.appendChild(i),l.appendChild(n),e.appendChild(l),document.body.appendChild(e),e.style.display="block",i.addEventListener("click",function(){e.style.display="none"})}),document.body.appendChild(l)};
