export default function Home(){
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-tight">Daniel Canaud</div>
          <nav className="hidden gap-2 md:flex">
            <a className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100" href="#Inicio">
              Início
            </a>
            <a className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100" href="#Projetos">
              Projetos
            </a>
            <a className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100" href="#sobre">
              Sobre
            </a>
            <a className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100" href="#contato">
              Contato
            </a>
          </nav>
          <a className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-50 hover:bg-zinc-800" href="#contato">
            Fale comigo
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4">
          <section id="inicio" className="grid min-h-[70vh] items-center gap-8 py-14 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-600">Frontend React next.js</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Construo experiências web rápidas, elegantes e escalaveis
            </h1>
            <p className="mt-4 max-w-xl text-zinc-600">
              Portfólio com foco em qualidade, boas práticas, acessibilidades e perfomance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-zinc-800" href="#projetos">
              Ver projetos
              </a>
              <a className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100" href="#contato">
                Entrar em contato
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end"></div>
          <div className="h-48 w-48 rounded-full border border-zinc-200 bg-white shadow-sm md:h-56">
          </div>
          </section>
          <section id="projetos" className="py-14">
            <h2 className="text-2xl font-semibold tracking-tight">Projetos</h2>
            <p className="mt-2 text-zinc-600">Alguns dos meus trabalhos</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-white p-5">Projeto 1</div>
              <div className="rounded-xl border border-zinc-200 bg-white p-5">Projeto 2</div>
            </div>
          </section>
          <section id="sobre" className="py-14">
            <h2 className="text-2xl font-semibold tracking-tight">Sobre</h2>
            <p className="mt-2 text-zinc-600">
            aqui vamos colocar uma bio curta, focada em impacto(não so lista de tecnologia)
            </p>
          </section>
          <section id="contato" className="py-14">
            <h2 className="text-2xl font-semibold tracking-tight">Contato & redes</h2>
            <p className="mt-2 text-zinc-600">
            colocaremos os links com icones animados  e um botão flotoante do whatsapp
            </p>
          </section>
      </main>
      <footer className="border-t border-zinc 200/70 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-zinc-600">
          {new Date().getFullYear() } &copy; Daniel Canaud. Todos os direitos reservados.
        </div>

      </footer>

    </div>
  )
}