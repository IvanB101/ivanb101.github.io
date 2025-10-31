export default function ProjectGallery({
  msg,
}: Readonly<{
  msg: string;
}>) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-2xl">{msg}</div>
    </div>
  );
}
