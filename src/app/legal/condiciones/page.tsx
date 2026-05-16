import LegalPage, { LegalSection, InfoBox, LegalList } from "@/components/LegalPage";

export const metadata = {
  title: "Condiciones de Servicio — Baifo Studio",
};

export default function Condiciones() {
  return (
    <LegalPage title="Condiciones Generales de Servicio">
      <LegalSection number="1" title="Objeto y Partes">
        <p>
          Las presentes Condiciones Generales regulan la contratación de servicios de diseño web,
          desarrollo y automatización de procesos ofrecidos por{" "}
          <strong style={{ color: "#e8e8f2" }}>Baifo Studio S.L.</strong> (en adelante, BAIFO STUDIO),
          con CIF [PLACEHOLDER_CIF], domiciliada en [PLACEHOLDER_DOMICILIO].
        </p>
        <p>
          La aceptación de un presupuesto implica la aceptación íntegra de estas condiciones.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Servicios Ofrecidos">
        <p>BAIFO STUDIO ofrece los siguientes servicios:</p>
        <LegalList items={[
          "Diseño y desarrollo de sitios web a medida",
          "Automatización de procesos de negocio",
          "Integración de herramientas y plataformas digitales",
          "Mantenimiento y soporte técnico de proyectos entregados",
        ]} />
        <p>
          Los detalles específicos de cada proyecto se acordarán en el presupuesto o propuesta
          firmada por ambas partes.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Contratación y Formalización">
        <p>
          <strong style={{ color: "#e8e8f2" }}>3.1.</strong> El proceso de contratación se
          inicia mediante el formulario de contacto, email o WhatsApp.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>3.2.</strong> BAIFO STUDIO elaborará una propuesta
          personalizada con alcance, plazos y precio. La contratación se formaliza mediante:
        </p>
        <LegalList items={[
          "Aceptación expresa del presupuesto (email o firma digital)",
          "Pago del importe inicial acordado",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Precios y Forma de Pago">
        <p>
          <strong style={{ color: "#e8e8f2" }}>4.1. Precios:</strong> Los precios se establecen
          en cada propuesta y pueden modificarse para nuevos proyectos sin afectar a contratos
          ya formalizados.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>4.2. Formas de pago aceptadas:</strong>
        </p>
        <LegalList items={[
          "Transferencia bancaria",
          "Bizum",
          "PayPal",
        ]} />
        <p>
          <strong style={{ color: "#e8e8f2" }}>4.3. Estructura de pago:</strong> Como norma
          general, se factura un 50% al inicio del proyecto y el 50% restante en la entrega.
          Proyectos de mayor envergadura pueden acordar una estructura diferente.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>4.4. IVA:</strong> Todos los precios están
          sujetos al IVA vigente según la normativa española.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Plazos y Entrega">
        <p>
          <strong style={{ color: "#e8e8f2" }}>5.1.</strong> Los plazos de entrega se establecen
          en la propuesta y están condicionados a la recepción puntual de materiales, contenidos
          y feedback por parte del cliente.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>5.2.</strong> Los retrasos provocados por
          falta de respuesta o materiales del cliente no serán imputables a BAIFO STUDIO.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Obligaciones del Cliente">
        <p>El cliente se compromete a:</p>
        <LegalList items={[
          "Proporcionar con puntualidad los materiales necesarios (textos, imágenes, accesos)",
          "Revisar y aprobar entregas en los plazos acordados",
          "Realizar los pagos en las fechas establecidas",
          "No compartir ni ceder a terceros los entregables sin autorización",
          "Comunicar cualquier cambio de alcance antes de su implementación",
        ]} />
      </LegalSection>

      <LegalSection number="7" title="Obligaciones de Baifo Studio">
        <p>BAIFO STUDIO se compromete a:</p>
        <LegalList items={[
          "Desarrollar el proyecto según el alcance acordado",
          "Mantener al cliente informado del avance",
          "Responder consultas en un plazo máximo de 48 horas laborables",
          "Mantener la confidencialidad de la información del cliente",
          "Entregar el código fuente o accesos al finalizar el proyecto, según lo pactado",
        ]} />
      </LegalSection>

      <LegalSection number="8" title="Revisiones y Cambios de Alcance">
        <p>
          <strong style={{ color: "#e8e8f2" }}>8.1.</strong> Cada proyecto incluye un número
          de rondas de revisión indicado en la propuesta.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>8.2.</strong> Las modificaciones que supongan
          un cambio de alcance serán presupuestadas por separado y requerirán aprobación
          expresa antes de ejecutarse.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Cancelación y Reembolsos">
        <p>
          <strong style={{ color: "#e8e8f2" }}>9.1. Desistimiento:</strong> El cliente dispone
          de 14 días naturales desde la contratación para desistir, con devolución del 100%
          del importe si no se ha iniciado el trabajo.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>9.2. Cancelación iniciado el proyecto:</strong>{" "}
          Si el cliente cancela una vez comenzado el trabajo, se facturará la parte proporcional
          del trabajo realizado. El importe inicial no es reembolsable.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>9.3. Incumplimiento de pago:</strong> El impago
          faculta a BAIFO STUDIO a suspender el servicio y retener los entregables hasta
          regularización.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Propiedad Intelectual">
        <p>
          <strong style={{ color: "#e8e8f2" }}>10.1.</strong> Una vez completado el pago íntegro,
          el cliente adquiere los derechos de uso del proyecto entregado para el uso acordado.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>10.2.</strong> BAIFO STUDIO se reserva el derecho
          a incluir el proyecto en su portfolio, salvo acuerdo de confidencialidad expreso.
        </p>
        <p>
          <strong style={{ color: "#e8e8f2" }}>10.3.</strong> Las herramientas, librerías y
          componentes de terceros utilizados en el proyecto están sujetos a sus propias licencias.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Limitación de Responsabilidad">
        <p>
          BAIFO STUDIO no se hace responsable de pérdidas de negocio, datos o ingresos derivados
          de fallos técnicos ajenos a su control (hosting, servicios de terceros, ciberataques, etc.).
        </p>
        <p>
          La responsabilidad máxima de BAIFO STUDIO quedará limitada al importe total abonado
          por el proyecto en cuestión.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Protección de Datos">
        <p>
          El tratamiento de datos personales se regula según la{" "}
          <a href="/legal/privacidad" style={{ color: "#4f46e5" }}>
            Política de Privacidad
          </a>{" "}
          disponible en la web, conforme al RGPD y la LOPDGDD.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Modificación de las Condiciones">
        <p>
          BAIFO STUDIO se reserva el derecho a modificar estas condiciones, comunicándolo con
          al menos 30 días de antelación. Los contratos en curso seguirán rigiéndose por las
          condiciones vigentes al momento de su formalización.
        </p>
      </LegalSection>

      <LegalSection number="14" title="Legislación Aplicable y Jurisdicción">
        <p>
          Estas condiciones se rigen por la legislación española. Para cualquier controversia,
          las partes se someten a los Juzgados y Tribunales de [PLACEHOLDER_CIUDAD], con
          renuncia expresa a cualquier otro fuero.
        </p>
      </LegalSection>

      <LegalSection number="15" title="Contacto">
        <InfoBox>
          <span><strong style={{ color: "#e8e8f2" }}>Email:</strong> hola@baifostudio.com</span>
          <span><strong style={{ color: "#e8e8f2" }}>Teléfono / WhatsApp:</strong> 664 636 976</span>
          <span><strong style={{ color: "#e8e8f2" }}>Web:</strong> baifostudio.com</span>
        </InfoBox>
      </LegalSection>
    </LegalPage>
  );
}
