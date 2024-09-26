export default function ImportantNote() {
    return (
      <article class="flex max-w-xl flex-col items-start justify-between border rounded-xl shadow-xl p-1">
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" class="text-gray-500">01/01/2024</time>
        <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Compras</a>
      </div>
      <div class="group relative">
        <p class="mt-2 line-clamp-3 text-xl font-semibold leading-6 text-cyan-800">
          Um placa de vídeo RTX 4070 TI SUPER
        </p>
        <h4 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <div href="#">
            <span class=""></span>
            <div className="overflow-y-auto h-36">
            Comprar placa de vídeo <br></br>
            Scrolling in all directions <br></br>
            Use the overflow-scroll utility to add scrollbars to an element. Unlike overflow-auto, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
          
            </div>
            </div>
        </h4>

      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        {/* <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"> */}
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a href="#">
              <span class="absolute inset-0"></span>
              Alã Izepilovski
            </a>
          </p>
          <p class="text-gray-600">Co-Founder / CTO</p>
        </div>
      </div>
    </article>
    )
}