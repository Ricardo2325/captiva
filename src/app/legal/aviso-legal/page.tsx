import LegalPage, { LegalSection, InfoBox, LegalList } from "@/components/LegalPage";

export const metadata = {
  title: "Aviso Legal — Baifo Studio",
};

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso Legal">
      <LegalSection number="1" title="Datos Identificativos">
        <InfoBox>
          <span><strong style={{ color: "#e8e8f2" }}>Titular:</strong> Baifo Studio S.L.</span>
          <span><strong style={{ color: "#e8e8f2" }}>CIF:</strong> [PLACEHOLDER_CIF]</span>
          <span><strong style={{ color: "#e8e8f2" }}>Domicilio social:</strong> [PLACEHOLDER_DOMICILIO]</span>
          <span><strong style={{ color: "#e8e8f2" }}>Email:</strong> hola@baifostudio.com</span>
          <span><strong style={{ color: "#e8e8f2" }}>Teléfono:</strong> 664 636 976</span>
          <span><strong style={{ color: "#e8e8f2" }}>Web:</strong> baifostudio.com</span>
        </InfoBox>
      </LegalSection>

      <LegalSection number="2" title="Objeto">
        <p>
          El presente aviso legal regula el uso del sitio web baifostudio.com (en adelante, el SITIO WEB),
          del que es titular Baifo Studio S.L.
        </p>
        <p>
          La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena
          y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Condiciones de Uso">
        <p>El acceso y utilización del sitio web es gratuito. El usuario se compromete a no emplear los contenidos para:</p>
        <LegalList items={[
          "Incurrir en actividades ilícitas o contrarias al orden público",
          "Difundir contenidos de carácter racista, xenófobo o pornográfico-ilegal",
          "Provocar daños en los sistemas del sitio web",
          "Introducir o difundir virus informáticos o sistemas maliciosos",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Propiedad Intelectual e Industrial">
        <p>
          El sitio web, incluyendo su programación, diseños, logotipos, textos y gráficos, son propiedad
          de Baifo Studio S.L. o cuenta con licencia expresa de los autores.
        </p>
        <p>
          Todos los contenidos se encuentran protegidos por la normativa de propiedad intelectual e industrial.
          Queda prohibida su reproducción total o parcial sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Responsabilidad">
        <p>
          Baifo Studio S.L. no se hace responsable de los daños e inconvenientes de cualquier naturaleza
          que puedan derivarse del uso incorrecto del sitio web.
        </p>
        <p>
          El titular se compromete a retirar o bloquear los contenidos que pudieran contravenir la
          legislación nacional o internacional, conforme a los arts. 11 y 16 de la LSSI-CE.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Enlaces Externos">
        <p>
          El sitio web puede contener enlaces a sitios de terceros. Baifo Studio S.L. no se hace responsable
          de los contenidos de dichos sitios ni asume responsabilidad por los mismos.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Legislación Aplicable y Jurisdicción">
        <p>
          Para la resolución de controversias relacionadas con este sitio web será de aplicación la legislación
          española, sometiéndose las partes a los Juzgados y Tribunales de [PLACEHOLDER_CIUDAD], con
          renuncia expresa a cualquier otro fuero.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
