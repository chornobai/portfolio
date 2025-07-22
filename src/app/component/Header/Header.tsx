import Link from "next/link";
import Image from "next/image";
import Photo from "../../assets/img/Photo_Veronika_Chernobai.jpeg"

export const Header = () => (
    <nav className="navbar text-white bg-red-950 navbar-expand-lg navbar-dark bg-dark self-start">
        <div className="container flex flex-col items-center justify-center h-full w-full gap-4">
            <Link className="navbar-brand p-[30]" href="/public">About me</Link>
            <div className="w-[200px] h-[200px] overflow-hidden rounded-full flex " >
                <Image
                    src={Photo}
                    alt="Avatar"
                    width={200}
                    height={200}
                    style={{ objectPosition: 'top 45%' }}
                    className="object-cover"
                />
            </div>
            <div>
                <h2>FrontendDev</h2>
                <p>Привет, я Вероника!</p>
                <p>Я очень долго искала дело, которое меня по-настоящему увлечёт. Сначала это было искусство, затем —
                    конструирование одежды, но однажды я решила попробовать вёрстку сайтов. Тогда я нашла бесплатные
                    курсы на HTML Academy, позанималась до лимита и на время оставила это занятие.</p>

                <p>Через год я снова вернулась к обучению, прошла ещё больше бесплатных курсов и заметила, что мне всё
                    даётся легко, а время за изучением пролетает незаметно. Тогда я решилась на платное обучение по
                    вёрстке и базовому JavaScript. Я создала множество лендингов, но понимала, что этого
                    недостаточно.</p>

                <p>Желая углубить свои знания, я начала изучать React и поступила в школу IT-Incubator. Там для меня
                    открылся совершенно новый мир: архитектура приложений, продвинутые принципы программирования,
                    различные подходы к написанию кода, новые технологии. Это было нелегко, но невероятно
                    увлекательно!</p>

                <p>Разработка — это не просто профессия, а мой путь. Путь к созданию удобных, масштабируемых и
                    продуманных решений. Я люблю вызовы, постоянно учусь новому и стремлюсь к совершенству в коде.</p>
                <blockquote>Code is my way. 🚀</blockquote>
            </div>
            <div>
                <h2>FrontendDev</h2>
                <p>Hi, I&apos;m Veronika!</p>
                <p>All my life, I’ve been searching for something that would truly captivate me. At first, it was art,
                    then fashion design — but one day, I decided to try website layout. I found some free courses on
                    HTML Academy, studied until I hit the limit, and then set it aside for a while.</p>

                <p>A year later, I came back to it, took even more free courses, and noticed that everything came easily
                    to me — time just flew by while I was learning. That’s when I decided to invest in paid training for
                    layout and basic JavaScript. I created many landing pages, but I knew that wasn’t enough.</p>

                <p>Wanting to deepen my knowledge, I started learning React and enrolled in IT-Incubator. That’s when a
                    whole new world opened up for me: app architecture, advanced programming principles, different
                    approaches to writing code, and new technologies. It wasn’t easy — but it was incredibly
                    exciting!</p>

                <p>Development is not just a job for me — it’s my path. A path to creating convenient, scalable, and
                    thoughtful solutions. I love challenges, constantly learn new things, and strive for perfection in
                    code.</p>

                <blockquote>Code is my way. 🚀</blockquote>
            </div>
        </div>
    </nav>
)
