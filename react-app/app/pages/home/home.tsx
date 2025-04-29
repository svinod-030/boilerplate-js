import type { Route } from "../../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "React | Home" },
        { name: "description", content: "Home page" },
    ];
}

export default function Home() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <div className="w-[500px] max-w-[100vw] p-4">
                        <h3> Home </h3>
                    </div>
                </header>
            </div>
        </main>
    );
}
