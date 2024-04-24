type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <>
      <button className="bebas-neue-regular text-2xl bg-emerald-400 hover:bg-emerald-500 text-white my-6 py-2 px-4 border border-emerald-600 rounded shadow">
        {text}
      </button>
    </>
  );
}
