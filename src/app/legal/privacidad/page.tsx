import LegalPage, { LegalSection, InfoBox, LegalList } from "@/components/LegalPage";

export const metadata = {
  title: "Política de Privacidad — Baifo Studio",
};

export default function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad">
      <LegalSection number="1" title="Información al Usuario">
        <p>
          Baifo Studio S.L., en adelante RESPONSABLE, es el Responsable del tratamiento de los datos
          personales del Usuario y le informa de que serán tratados conforme al Reglamento (UE) 2016/679
          (GDPR) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>
      </LegalSection>

      <LegalSection number="2" title="Identidad del Responsable">
        <InfoBox>
          <span><strong style={{ color: "#e8e8f2" }}>Responsable:</strong> Baifo Studio S.L.</span>
          <span><strong style={{ color: "#e8e8f2" }}>CIF:</strong> [PLACEHOLDER_CIF]</span>
          <span><strong style={{ color: "#e8e8f2" }}>Domicilio:</strong> [PLACEHOLDER_DOMICILIO]</span>
          <span><strong style={{ color: "#e8e8f2" }}>Email:</strong> hola@baifostudio.com</span>
          <span><strong style={{ color: "#e8e8f2" }}>Teléfono:</strong> 664 636 976</span>
        </InfoBox>
      </LegalSection>

      <LegalSection number="3" title="Finalidad del Tratamiento">
        <p>Los datos personales obtenidos a través del sitio web se utilizan para:</p>
        <LegalList items={[
          "Gestionar las consultas recibidas a través del formulario de contacto",
          "Enviar información sobre nuestros servicios de diseño web y automatización",
          "Gestionar la contratación y ejecución de proyectos",
          "Mantener la comunicación durante el desarrollo del proyecto",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Base Legal y Legitimación">
        <p>La base legal para el tratamiento de sus datos es:</p>
        <LegalList items={[
          "El consentimiento del usuario al rellenar el formulario de contacto",
          "La ejecución de un contrato de prestación de servicios",
          "El interés legítimo del responsable en atender consultas comerciales",
        ]} />
      </LegalSection>

      <LegalSection number="5" title="Datos Recopilados">
        <p>Para las finalidades indicadas se recaban los siguientes datos:</p>
        <LegalList items={[
          "Nombre y apellidos o razón social",
          "Dirección de email",
          "Teléfono (opcional)",
          "Descripción del proyecto o consulta",
        ]} />
      </LegalSection>

      <LegalSection number="6" title="Período de Conservación">
        <p>
          Los datos se conservarán mientras el usuario no solicite su supresión y, en caso de
          contratación de servicios, durante el tiempo necesario para cumplir con las obligaciones
          legales y fiscales aplicables.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Destinatarios de Datos">
        <p>Los datos no se cederán a terceros salvo obligación legal. Se utilizan los siguientes servicios:</p>
        <LegalList items={[
          "Resend — servicio de envío de emails transaccionales",
          "Google Analytics — análisis de tráfico web (si el usuario acepta cookies analíticas)",
          "Meta Pixel — publicidad personalizada (si el usuario acepta cookies de marketing)",
          "Servicios de hosting y alojamiento web",
        ]} />
      </LegalSection>

      <LegalSection number="8" title="Derechos del Usuario">
        <p>El usuario tiene derecho a:</p>
        <LegalList items={[
          "Acceder a sus datos personales",
          "Solicitar su rectificación o supresión",
          "Solicitar la limitación de su tratamiento",
          "Oponerse al tratamiento",
          "Solicitar la portabilidad de sus datos",
        ]} />
        <p>
          Para ejercer estos derechos, puede contactar con el RESPONSABLE en:{" "}
          <a href="mailto:hola@baifostudio.com" style={{ color: "#4f46e5" }}>
            hola@baifostudio.com
          </a>
        </p>
      </LegalSection>

      <LegalSection number="9" title="Reclamaciones">
        <p>
          El usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección
          de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5" }}>
            www.aepd.es
          </a>
          ) si considera que el tratamiento no se ajusta a la normativa vigente.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Medidas de Seguridad">
        <p>
          Baifo Studio S.L. adopta las medidas técnicas y organizativas necesarias para garantizar
          la seguridad de los datos personales y evitar su alteración, pérdida o acceso no autorizado.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
