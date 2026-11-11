// Configure these values after creating the free Supabase project.
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("membershipForm");
const message = document.getElementById("formMessage");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (!form.elements.consent.checked) return;
  const record = {
    full_name: data.full_name.trim(),
    email: data.email.trim() || null,
    phone: data.phone.trim(),
    city: data.city.trim() || null,
    cultural_area: data.cultural_area,
    consent: true
  };
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    message.textContent = "Prévia do formulário: para receber inscrições de verdade, falta conectar o banco de dados online. Nenhum dado foi enviado.";
    return;
  }
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/membership_interest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(record)
    });
    if (!response.ok) throw new Error("Não foi possível enviar.");
    form.reset();
    message.textContent = "Sua manifestação foi enviada. Obrigado pelo interesse em fazer parte da ACT Mauriti!";
  } catch (error) {
    message.textContent = "Não foi possível enviar agora. Tente novamente mais tarde ou entre em contato com a associação.";
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
