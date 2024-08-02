export default function Page() {
  return (
    <div className="flex flex-1 flex-col p-8 w-full h-full items-center justify-center text-center select-none">
      <h1 className="text-4xl font-bold my-10 text-blue-ribbon-700">
        Sobre la app
      </h1>
      <p className="my-4">
        <b className="text-blue-ribbon-700">MIO Go </b>
        es un cliente <b>NO oficial,</b> gratuito y de{" "}
        <a
          href="https://github.com/JuanLoaiza007/mio-go"
          className="text-blue-600 underline"
        >
          código abierto
        </a>{" "}
        diseñado para proporcionar información y otras funcionalidades útiles
        relacionadas con el sistema integrado de transporte masivo MIO de Cali
        como consultar el saldo de la tarjeta de manera rápida y eficiente.
      </p>
      <p className="my-4">
        Esta aplicación NO ofrece ningún tipo de garantía sobre su
        funcionamiento o precisión, tampoco almacena información del sistema MIO
        o sus usuarios. Las imágenes y otros contenidos relacionados con el
        sistema MIO pertenecen a sus respectivos autores y se utilizan con fines
        informativos.
      </p>
      <p className="my-4">
        Esta aplicación actúa únicamente como un cliente para consultar
        información disponible públicamente y accesible a través de Internet.
      </p>
      <p></p>
    </div>
  );
}
