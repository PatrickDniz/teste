const historic = JSON.parse(localStorage.getItem('historic')) || [];
const levelNow = historic.length + 1;
const words = [
  "API", "CSS", "CPU", "SQL", "VPN", "SDK", "GIT", "PUT",
  "CLI", "RAM", "XML", "LAN", "DNS", "NPM", "FTP", "GET",
  "HTML", "CSS3", "REST", "JSON", "SOAP", "AJAX", "POST",
  "WiFi", "Auth", "SMTP", "IMAP", "HTTP",
  "SOLID"
];
const word = words[historic.length];

if(!word){
  console.log("zerou o game")
} else {
  Game(word).start();
}
