import './Background.scss';

export default function Background() {
    return (
        <svg width="200" height="200" viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid slice" fill="none"
            xmlns="http://www.w3.org/2000/svg" className="background artwork">
            <rect width="200" height="200" fill="#ffffff"></rect>
            <circle id="blob-0" cx="100" cy="60" r="90" fill="rgb(145,255,128)" filter="url(#f0)" style={{ mixBlendMode: 'exclusion' }}></circle>
            <circle id="blob-1" cx="140" cy="100" r="90" fill="rgb(128,255,238)" filter="url(#f1)" style={{ mixBlendMode: 'lighten' }}></circle>
            <circle id="blob-2" cx="100" cy="140" r="90" fill="rgb(128,144,255)" filter="url(#f2)" style={{ mixBlendMode: 'overlay' }}></circle>
            <circle id="blob-3" cx="60" cy="100" r="90" fill="rgb(255,128,145)" filter="url(#f3)" style={{ mixBlendMode: 'normal' }}></circle>
            <defs> <filter id="f0" x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="24" result="fx_foregroundBlur"></feGaussianBlur> <feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="6" stitchTiles="stitch" result="noise"></feTurbulence>
                <feDisplacementMap in="fx_foregroundBlur" in2="noise" result="displacement" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
            </filter></defs><defs> <filter id="f1" x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="24" result="fx_foregroundBlur"></feGaussianBlur>
                <feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="6" stitchTiles="stitch" result="noise"></feTurbulence>
                <feDisplacementMap in="fx_foregroundBlur" in2="noise" result="displacement" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap> </filter></defs><defs> <filter id="f2" x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="24" result="fx_foregroundBlur"></feGaussianBlur> <feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="6" stitchTiles="stitch" result="noise"></feTurbulence> <feDisplacementMap in="fx_foregroundBlur" in2="noise" result="displacement" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap> </filter></defs><defs> <filter id="f3" x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="24" result="fx_foregroundBlur"></feGaussianBlur> <feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="6" stitchTiles="stitch" result="noise"></feTurbulence> <feDisplacementMap in="fx_foregroundBlur" in2="noise" result="displacement" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap> </filter></defs> </svg>
    )
}