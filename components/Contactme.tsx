import React from "react";
import styles from "./../styles/Home.module.css";
import profilePic from "./../assets/profile-pic.png";
import Image from "next/image";
import instagram from "./../assets/instagram.png";
import linkedin from "./../assets/linkedin.png";
import github from "./../assets/github.png";
import Link from "next/link";
function Contactme() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <div
      id="contacts"
      className={`${styles.Welcome}  text-white sm:pb-8  xs:pb-8`}
    >
      <div className="flex items-center justify-center lg:flex-row lg:gap-60 lg:pt-20 md:flex-row md:gap-40 md:pt-20 sm:flex-col sm:gap-20 xs:flex-col xs:gap-10 ">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex justify-center items-center lg:w-[350px] md:w-[300px] sm:w-[300px] xs:w-[300px]">
            <Image
              src={"/me.jpg"}
              width={300}
              height={300}
              alt="profile pic"
              className="w-[300px] h-[300px] object-top object-cover rounded-xl"
            />
          </div>
          <button
            className="p-2 transition-all duration-300 ease-in-out border hover:rounded-3xl"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1yL37a2MrCc5QozuHVblNiTWL51Nxbg_W/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download My CV
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <form
            action=""
            className="flex flex-col items-center justify-start h-full gap-4"
          >
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Your Name"
              className="px-4 py-2 text-black rounded-3xl"
            />

            <label htmlFor="">Your Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              className="px-4 py-2 text-black rounded-3xl"
            />

            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="px-4 py-2 text-black rounded-3xl"
            />
            <a
              className="p-2 transition-all duration-300 ease-in-out border hover:rounded-3xl"
              href={`mailto:abdallahsedo@hotmail.com?subject='Hello from ${name}!'&body="${message}\n from ${email}"`}
            >
              Let&apos;s talk
            </a>
          </form> */}
          <a href="mailto:abdallahabusedo@gmail.com">
            Email: abdallahabusedo@gmail.com
          </a>
          <div className="flex items-center justify-center ">
            {/* <Link href="https://www.facebook.com/abdallah.abusedo">
              <Image src={facebook} alt="Social" width={100} />
            </Link> */}
            <Link href="https://www.instagram.com/abdallah_abusedo/">
              <Image src={instagram} alt="Social" width={100} />
            </Link>
            {/* <Link href="https://twitter.com/AbosedoAbdallah">
              <Image src={twitter} alt="Social" width={100} />
            </Link> */}
            <Link href="https://www.linkedin.com/in/abdallahabusedo/">
              <Image src={linkedin} alt="Social" width={100} />
            </Link>
            <Link href="https://github.com/abdallahabusedo?tab=repositories">
              <Image src={github} alt="Social" width={100} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
