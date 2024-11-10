// funktion til at definere indhold efter subscription
document.querySelector("#ab1").addEventListener("click", subscription);
document.querySelector("#ab2").addEventListener("click", subscription);
document.querySelector("#ab3").addEventListener("click", subscription);
document.querySelector("#ab4").addEventListener("click", subscription);
 
function subscription() {
  if (this.getAttribute("ID") === "ab1") {
    localStorage.setItem("overskrift", "Digital");
    localStorage.setItem("text", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til Abonnementsfordele. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
    localStorage.setItem("pris", 210);
  }
  if (this.getAttribute("ID") === "ab2") {
    localStorage.setItem("overskrift", "Digital og weekend");
    localStorage.setItem("text", "Abonnementet giver ubegrænset adgang til den digitale avis samt papiravisen tilsendt fredag og lørdag. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
    localStorage.setItem("pris", 315);
  }
  if (this.getAttribute("ID") === "ab3") {
    localStorage.setItem("overskrift", "Fuldt subscription");
    localStorage.setItem("text", "Abonnementet giver ubegrænset adgang til den digitale avis samt papiravisen tilsendt fredag og lørdag. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
    localStorage.setItem("pris", 440);
  }
  if (this.getAttribute("ID") === "ab4") {
    localStorage.setItem("overskrift", "Studerende");
    localStorage.setItem("text", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til Abonnementsfordele. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
    localStorage.setItem("pris", 210);
  }
}