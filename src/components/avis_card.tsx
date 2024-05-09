// add quotes to temoinages

type Props = {
  title: string;
  text: string;
  name: string;
};

export default function AvisCard({ title, text, name }: Props) {
  return (
    <>
      <article className="w-96 p-5 text-black bg-zinc-50 rounded-xl mr-4">
        <h1 className="text-xl font-bold pb-2 ">{title}</h1>
        <p className="text-zinc-500 text-xs">{text}</p>
        <h1 className="font-bold pt-2">{name}</h1>
      </article>
    </>
  );
}
