import React from "react";
import styles from "./../styles/Home.module.css";
import NavBar from "./NavBar";
import profilePic from "./../assets/profile-pic.png";
import Image from "next/image";
import facebook from "./../assets/facebook.png";
import instagram from "./../assets/instagram.png";
import twitter from "./../assets/twitter.png";
import linkedin from "./../assets/linkedin.png";
import github from "./../assets/github.png";
import Link from "next/link";
function Contactme() {
  return (
    <div className={`${styles.Welcome} h-[100vh] text-white `}>
      <NavBar />
      <div className="flex justify-center items-center gap-60 mt-20">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="lg:w-[350px] ">
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
              name="name"
              placeholder="Your Name"
              className="text-black px-4 py-2 rounded-3xl"
            />

            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-black px-4 py-2 rounded-3xl"
            />

            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              placeholder="Message"
              className="text-black px-4 py-2 rounded-3xl"
            />
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
