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
        <h1 className="text-xl font-bold pb-2 ">Totalement Ravis</h1>
        <p className="text-zinc-500 text-xs">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit
          assumenda, temporibus non eligendi repellat recusandae aut?
        </p>
        <h1 className="font-bold pt-2">Nassera</h1>
      </article>
    </>
  );
}
