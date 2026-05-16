import LegalPage, { LegalSection, LegalList } from "@/components/LegalPage";

export const metadata = {
  title: "Política de Cookies — Baifo Studio",
};

const cookiesNecesarias = [
  "baifo_cookie_consent — Guarda tus preferencias de cookies. Duración: 1 año.",
];

const cookiesAnaliticas = [
  "_ga — Google Analytics. Distingue usuarios únicos. Duración: 2 años.",
  "_gid — Google Analytics. Distingue usuarios únicos. Duración: 24 horas.",
];

const cookiesMarketing = [
  "_fbp — Meta Pixel. Identifica navegadores para publicidad. Duración: 3 meses.",
];

export default function Cookies() {
  return (
    <LegalPage title="Política de Cookies">
      <LegalSection number="1" title="¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
          visitás un sitio web. Permiten al sitio recordar tus acciones y preferencias durante
          un período de tiempo.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Cookies que utilizamos">
        <p>
          <strong style={{ color: "#e8e8f2" }}>Necesarias (siempre activas)</strong>
          <br />
          Esenciales para el funcionamiento del sitio. No se pueden desactivar.
        </p>
        <LegalList items={cookiesNecesarias} />

        <p>
          <strong style={{ color: "#e8e8f2" }}>Analíticas (opcionales)</strong>
          <br />
          Recopilan información sobre cómo los visitantes utilizan el sitio. Solo se activan
          si aceptás esta categoría.
        </p>
        <LegalList items={cookiesAnaliticas} />

        <p>
          <strong style={{ color: "#e8e8f2" }}>Marketing (opcionales)</strong>
          <br />
          Permiten mostrar publicidad relevante en plataformas de terceros. Solo se activan
          si aceptás esta categoría.
        </p>
        <LegalList items={cookiesMarketing} />
      </LegalSection>

      <LegalSection number="3" title="Servicios de terceros">
        <p>Este sitio utiliza los siguientes servicios que pueden establecer sus propias cookies:</p>
        <LegalList items={[
          "Google Analytics — análisis de comportamiento de usuarios (Google LLC)",
          "Meta Pixel — seguimiento para publicidad en Instagram y Facebook (Meta Platforms, Inc.)",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Gestión de preferencias">
        <p>
          Podés cambiar tus preferencias en cualquier momento usando el botón de configuración
          de cookies que aparece en el banner, o eliminando las cookies directamente desde
          tu navegador:
        </p>
        <LegalList items={[
          "Google Chrome: Configuración › Privacidad y seguridad › Cookies",
          "Mozilla Firefox: Opciones › Privacidad y seguridad › Cookies",
          "Safari: Preferencias › Privacidad › Cookies",
          "Microsoft Edge: Configuración › Cookies y permisos del sitio",
        ]} />
      </LegalSection>

      <LegalSection number="5" title="Desactivar cookies de terceros">
        <p>Para desactivar el seguimiento de servicios específicos:</p>
        <LegalList items={[
          "Google Analytics: instala el complemento de inhabilitación en tools.google.com/dlpage/gaoptout",
          "Meta Pixel: gestiona tus preferencias en www.youronlinechoices.eu",
        ]} />
      </LegalSection>

      <LegalSection number="6" title="Cambios en la política">
        <p>
          Esta política puede modificarse para adaptarse a cambios legislativos o instrucciones
          de la Agencia Española de Protección de Datos. Los cambios significativos se comunicarán
          mediante un aviso en el sitio web.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Contacto">
        <p>
          Para cualquier consulta sobre el uso de cookies:{" "}
          <a href="mailto:hola@baifostudio.com" style={{ color: "#4f46e5" }}>
            hola@baifostudio.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
