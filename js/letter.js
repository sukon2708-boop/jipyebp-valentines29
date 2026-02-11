const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const hintText = document.getElementById("hintText");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const letterText = document.getElementById("letterText");

let opening = false;
let letterOpened = false;

const MESSAGE = `
Happy Valentine's Day ขอบคุณทุกสิ่งที่เราสองคนได้เจอกัน ขอบคุณตั้งแต่วันแรกจนมาถึงวันนี้ ขอบคุณที่มีเธออยู่ในทุกวันๆ วาเลนไทน์นี้ ขอให้เธอมีความสุขมากๆ และอยู่ด้วยกันแบบนี้ตลอดไปนะ
`;

// 📨 คลิกที่ซองจดหมาย
openLetter.addEventListener("click", () => {

  // ถ้าเปิดแล้ว → คลิกเพื่ออ่านจดหมาย
  if (letterOpened) {
    openModal();
    return;
  }

  if (opening) return;
  opening = true;

  // ซ่อนคำแนะนำ
  hintText.style.display = "none";

  // ปรับปุ่ม
  readBtn.textContent = "กำลังเปิดจดหมาย...";

  // letter2
  openLetter.classList.remove("letter-closed");
  openLetter.src = "assets/letter2.png";

  // ไป letter3
  setTimeout(() => {
    openLetter.src = "assets/letter3.png";
    letterOpened = true;
    opening = false;

    readBtn.textContent = "อ่านจดหมาย";
  }, 600);
});

// ปุ่มอ่านจดหมาย
readBtn.addEventListener("click", () => {
  if (!letterOpened) return;
  openModal();
});

// เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ปิด modal
closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});
