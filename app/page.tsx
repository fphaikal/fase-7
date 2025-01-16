'use client';

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { PiShootingStarFill, PiTrophyFill, PiMosqueFill } from "react-icons/pi";
import { TimetableStapper } from "@/components/timetable-stapper";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react"

const information = [
  {
    icon: <PiShootingStarFill size={40} />,
    title: "Tujuan Utama",
    content: "Festival Anak Sholeh bertujuan menanamkan kecintaan terhadap ilmu agama sekaligus membangun karakter anak-anak yang cerdas, sholeh, dan berjiwa entrepreneur."
  },
  {
    icon: <PiTrophyFill size={40} />,
    title: "Kegiatan dan Manfaat",
    content: "FASE menghadirkan perlombaan Islami yang menyalurkan bakat, meningkatkan semangat belajar, dan membangun rasa percaya diri anak-anak."
  },
  {
    icon: <PiMosqueFill size={40} />,
    title: "Nilai dan Dampak",
    content: "Melalui FASE, generasi muda diajak memegang teguh ajaran agama Allah untuk menjadi pribadi yang unggul dan berakhlak mulia."
  }
]

const lomba = [
  {
    title: "Lomba Adzan",
    content: "Melatih keterampilan melantunkan adzan dengan merdu, intonasi tepat, dan bacaan sesuai kaidah.",
    img: "/mosque.jpg",
    href: "https://mmfazzr06.github.io/fase7-website/JUKNIS%20ADZAN.pdf",
    class: "col-span-12 sm:col-span-4"
  },
  {
    title: "MTtQ (Musabaqah Tartil Qur'an)",
    content: "Menguji kemampuan membaca Al-Qur'an dengan tartil sesuai tajwid, sambil memperkuat rasa cinta terhadap Al-Qur'an.",
    img: "/quran.jpg",
    href: "https://mmfazzr06.github.io/fase7-website/JUKNIS%20MTtQ.pdf",
    class: "col-span-12 sm:col-span-4"
  },
  {
    title: "Kaligrafi",
    content: "Menampilkan kreativitas dalam seni menulis ayat-ayat Al-Qur'an atau kata-kata Islami dengan indah dan penuh makna.",
    img: "/kaligrafi.jpg",
    href: "https://mmfazzr06.github.io/fase7-website/kaligrafi2.pdf",
    class: "col-span-12 sm:col-span-4"
  },
  {
    title: "Da’i (Pidato Dakwah Islam)",
    content: "Melatih peserta menyampaikan dakwah dengan percaya diri, relevan, dan inspiratif untuk kehidupan sehari-hari.",
    img: "/pidato.jpeg",
    href: "https://mmfazzr06.github.io/fase7-website/JUKNIS%20DA'I.pdf",
    class: "col-span-12 sm:col-span-6"
  },
  {
    title: "CCA (Cerdas Cermat Agama)",
    content: "Kompetisi tim untuk menguji pengetahuan agama Islam, sejarah Islam, dan hafalan ayat atau hadis.",
    img: "/cca.jpg",
    href: "https://mmfazzr06.github.io/fase7-website/JUKNIS%20CCA.pdf",
    class: "col-span-12 sm:col-span-6"
  }
]

const companyStages = [
  {
    title: 'Pendaftaran Online',
    description: '',
    year: '16 Des'
  },
  {
    title: 'Pendaftaran Offline',
    description: '',
    year: '2 Jan'
  },
  {
    title: 'Technical Meeting via Google Meet',
    description: '',
    year: '1 Feb'
  },
  {
    title: 'Pelaksanaan Lomba',
    description: '',
    year: '9 Feb'
  }
]

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col w-full min-h-screen items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0.0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring", visualDuration: 0.4, bounce: 0.5
          }}
          className="inline-block max-w-xl text-center justify-center relative z-40 mt-36 xl:mt-0">
          <span className={title()}>FASE</span>
          <span className={title({ color: "yellow" })}>#7</span>
          <br />
          <span className={title()}>
            Festival Anak Sholeh
          </span>
          <div className="text-medium mt-4">
            by Rohis Al-Hadiid SMK SMTI Yogyakarta
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring", visualDuration: 0.4, bounce: 0.5, delay: 0.2
          }}
          className="flex gap-3 z-40">
          <Link
            isExternal
            className={buttonStyles({
              color: "warning",
              radius: "full",
              variant: "shadow",
            })}
            href={'https://docs.google.com/forms/d/e/1FAIpQLSdtfZ99TbJAxMpT0Oa65Yw4A8Rk1t46rAK6j-KSOt0Fgb8egA/viewform?usp=embedded_form_link'}
          >
            Daftar Sekarang
          </Link>
        </motion.div>
        <div className="absolute w-2/5 top-20 rounded-full aspect-square bg-yellow-600/70 backdrop-filter blur-3xl opacity-20" />

        <div id="tentang" className="grid grid-cols-1 xl:grid-cols-3 gap-4 px-8 xl:px-0 mt-48">
          {information.map((info, index) => (
            <motion.div
              initial={{ opacity: 0.0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring", visualDuration: 0.4, bounce: 0.25, delay: index * 0.2
              }} key={index}>
              <Card key={index} isHoverable className="px-4 bg-gradient-to-tr from-[#FF705B] to-[#FFB457] dark:from-[#18181b] dark:to-[#FF705B] transition-colors">
                <CardHeader className="mt-4">
                  {info.icon}
                </CardHeader>
                <CardBody className="mb-4">
                  <h4 className="text-lg font-semibold">{info.title}</h4>
                  <p className="text-default-500">
                    {info.content}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="lomba" className="flex flex-col min-h-screen w-full z-40 px-8 xl:px-0">
        <motion.span
          initial={{ opacity: 0.0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring", visualDuration: 0.4, bounce: 0.25,
          }}
          className={title({ className: 'mt-48 mb-4' })}>Kategori Lomba</motion.span>
        <div className="gap-2 grid grid-cols-12 grid-rows-2 w-full">
          {lomba.map((lomba, index) => (
            <motion.div initial={{ opacity: 0.0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring", visualDuration: 0.4, bounce: 0.25, delay: index * 0.2
              }} key={index} className={`w-full h-[300px] ${lomba.class}`}>
              <Card key={index} isFooterBlurred className={`w-full h-[300px] ${lomba.class}`}>
                <Image
                  removeWrapper
                  alt={lomba.title}
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={lomba.img}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black">{lomba.title}</p>
                    <p className="text-default-200 text-tiny font-mono">{lomba.content} </p>
                  </div>
                  <Link href={lomba.href} isExternal>
                    <Button className="text-tiny" color="warning" radius="full" size="sm">
                      Juknis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col xl:flex-row min-h-screen gap-4 items-center justify-center w-full px-8 xl:px-0 mt-48">
        <div className="absolute right-0 translate-y-32 w-2/5 rounded-full aspect-square bg-yellow-600/70 backdrop-filter blur-3xl opacity-50" />
        <motion.span
          initial={{ opacity: 0.0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring", visualDuration: 0.4, bounce: 0.25,
          }}
          className="w-full xl:w-1/2 ">
          <Card isHoverable className="flex flex-col w-full  gap-4 items-center justify-center px-10 h-[650px]">
            <div className="inline-block max-w-xl text-center justify-center relative z-50">
              <span className={title()}>Informasi </span>
              <span className={title({ color: "yellow" })}>Pendaftaran</span>
            </div>
            <TimetableStapper
              stages={companyStages}
              currentStage={4}
            />
            <Link
              isExternal
              className={buttonStyles({
                color: "warning",
                radius: "full",
                variant: "shadow",
              })}
              href={'https://mmfazzr06.github.io/fase7-website/juknis.pdf'}
            >
              Info Lebih Lanjut <ArrowRight size={20} />
            </Link>
          </Card>
        </motion.span>
        <motion.span
          initial={{ opacity: 0.0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring", visualDuration: 0.4, bounce: 0.25, delay: 0.2
          }}
          className="w-full xl:w-1/2 ">
          <Card isHoverable className="flex flex-col gap-4 items-center justify-center text-center px-10 h-[650px]">
            <div className="inline-block max-w-xl text-center justify-center relative z-50">
              <span className={title()}>Pendaftaran Lomba </span>
              <span className={title({ color: "yellow" })}>FASE#7</span>
            </div>
            <span className="text-default-500">Lomba FASE #7 hanya untuk pelajar SMP, MTs/sederajat<br /> yang berdomisili di Daerah Istimewa Yogyakarta (DIY).</span>
            <span className="text-default-500">Setelah mengisi link pendaftaran ini, <br />silahkan untuk konfirmasi pembayaran melalui contact: <br /><Link isExternal href="https://wa.me/+62895324068459" className="text-warning">0895324068459 (Deya).</Link></span>
            <Link
              isExternal
              className={buttonStyles({
                color: "warning",
                radius: "full",
                variant: "shadow",
              })}
              href={'https://docs.google.com/forms/d/e/1FAIpQLSdtfZ99TbJAxMpT0Oa65Yw4A8Rk1t46rAK6j-KSOt0Fgb8egA/viewform?usp=embedded_form_link'}
            >
              Isi Formulir <ArrowRight size={20} />
            </Link>
          </Card>
        </motion.span>
      </div>
    </section>
  );
}
