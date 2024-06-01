// add quotes to temoinages

type Props = {
  title: string;
  text: string;
  name: string;
};

export default function AvisCard({ title, text, name }: Props) {
  return (
    <>
      <article className="sm:w-96 w-full p-5 mt-1 text-black bg-zinc-50 rounded-xl mr-4">
        <h1 className="text-xl font-bold pb-2 ">{title}</h1>
        <p className="text-zinc-500 text-xs">{text}</p>
        <h1 className="font-bold pt-2">{name}</h1>
      </article>
    </>
  );
}
