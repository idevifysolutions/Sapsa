import Container from "../common/Container";

const Donut = ({ slices, label }) => {
    const R = 16;
    const CIRC = 2 * Math.PI * R;
    let offset = 0;
    return (
        <div className="relative w-[100px] h-[100px] mx-auto">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r={R} fill="none" stroke="#e5e7eb" strokeWidth="3" />
                {slices.map((s, i) => {
                    const dash = (s.pct / 100) * CIRC;
                    const node = (
                        <circle key={i} cx="18" cy="18" r={R} fill="none"
                            stroke={s.color} strokeWidth="3.4"
                            strokeDasharray={`${dash} ${CIRC - dash}`}
                            strokeDashoffset={-offset} />
                    );
                    offset += dash;
                    return node;
                })}
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-gray-800">
                {label}
            </span>
        </div>
    );
};

const QualityHero = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat pt-[81px] flex items-center justify-center min-h-screen"
            style={{ backgroundImage: "url('/images/quality_hero_bg.png')" }}
        >
            <div className="absolute inset-0 bg-black/30" />


        </section>
    );
};

export default QualityHero;
