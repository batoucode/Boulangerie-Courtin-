export default function GoogleMap() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
      <iframe
        title="Boulangerie Courtin — 7 Place de la Halle, 41250 Bracieux"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.1281507073!2d1.5397!3d47.5572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3f18b3e2d3a27%3A0x4e6c0f0f0f0f0f0f!2s7%20Pl.%20de%20la%20Halle%2C%2041250%20Bracieux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
