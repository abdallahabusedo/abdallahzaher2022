import React from "react";
import styles from "./../styles/Home.module.css";
import NavBar from "./NavBar";
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
      className={`${styles.Welcome} lg:h-[100vh] md:h-[100vh] text-white sm:pb-8  xs:pb-8`}
    >
      <NavBar />
      <div
        className="flex  justify-center items-center
      lg:flex-row lg:gap-60 lg:mt-20
      md:flex-row md:gap-40 md:mt-20
      sm:flex-col sm:gap-20
      xs:flex-col xs:gap-10
    "
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="lg:w-[350px] md:w-[300px] sm:w-[300px] xs:w-[300px]">
            <Image src={profilePic} alt="profile pic" />
          </div>
          <button
            className="border p-2 transition-all duration-300 ease-in-out hover:rounded-3xl"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1yLejn5T6-SMN-X9v2YVoQsxtLY5n6j9t/view?usp=share_link",
                "_blank"
              )
            }
          >
            Download My CV
          </button>
        </div>
        <div className="flex flex-col justify-center items-center  gap-4">
          <form
            action=""
            className="flex flex-col justify-start items-center h-full gap-4"
          >
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Your Name"
              className="text-black px-4 py-2 rounded-3xl"
            />

            <label htmlFor="">Your Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              className="text-black px-4 py-2 rounded-3xl"
            />

            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="text-black px-4 py-2 rounded-3xl"
            />
            <a
            className="border p-2 transition-all duration-300 ease-in-out hover:rounded-3xl"
              href={`mailto:abdallahsedo@hotmail.com?subject='Hello from ${name}!'&body="${message}\n from ${email}"`}
            >
              Let&apos;s talk
            </a>
          </form>
          <div className="flex justify-center items-center ">
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
