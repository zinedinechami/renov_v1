// todo: add a hand shake stock photo on the left side
// Make height bigger
// make a black email button
// make a positive reinforcing message
// make card alot higher with image on the right

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-zinc-0 flex pt-18 lg:px-48 px-4 ">
        <div className="mx-auto  h-64   lg:flex">
          {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
  </div> */}
          <div className=" border-zinc-500   bg-zinc-900 rounded-xl  p-4 flex flex-col justify-between shadow-lg">
            <div className="mb-8">
              <div className="text-zinc-50 font-bold text-xl mb-2">
                New Text
              </div>
              <p className="text-zinc-50 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
