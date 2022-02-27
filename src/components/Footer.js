import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="container mx-auto py-5 text-center lg:px-40">
        <p>Some filler text for the footer</p>
        <p>
          Designed and Developed by{" "}
          <a
            href="https://github.com/Bailejd"
            className="text-white underline hover:text-green-400"
          >
            Bailejd
          </a>
          {" "} using React and Tailwind CSS
        </p>
      </div>
    </section>
  );
}
