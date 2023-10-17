export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center bg-black text-aqua flex flex-col">
      <small className="mb-2 block text-xs">
        &copy; Shikhar Sahu. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React in JavaScript, Tailwind CSS, Framer Motion, EmailJS, Vercel
        hosting.
      </p>
    </footer>
  );
}
