interface BrandLogoProps {
  className: string;
}
const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill="none"
      viewBox="0 0 50 50"
      className={className}
    >
      <path
        fill="url(#a)"
        d="M43.549 16.718a16.9 16.9 0 0 1-2.906-.068c-6.857-.762-12.404-5.806-13.242-12.044a12.61 12.61 0 0 1-.076-2.64C27.44.474 25.672-.53 24.303.3c-4.602 2.783-7.44 7.782-6.667 13.326.025.179.069.352.1.529a5.406 5.406 0 0 1 1.166-.136c3.643 0 6.594 3.625 6.594 8.093l-.002.054c.945-1.295 2.56-2.15 4.398-2.15 2.914 0 5.275 2.145 5.275 4.796 0 .225-.023.445-.057.662 4.283-.616 7.967-2.857 10.273-6.006.913-1.245-.193-2.852-1.834-2.748Z"
      />
      <path
        fill="url(#b)"
        d="M35.272 27.52a5.165 5.165 0 0 0 .774-2.71c0-3.085-2.761-5.595-6.154-5.595a7.33 7.33 0 0 0-.683.037 8.79 8.79 0 0 1-.22.027 9.158 9.158 0 0 0-.455.08c-.082.016-.165.035-.243.051a7.33 7.33 0 0 0-.467.136 5.02 5.02 0 0 0-.4.15c-.103.041-.206.08-.307.129-.117.05-.227.108-.337.168-.07.038-.14.075-.208.115-.076.043-.156.081-.231.129-.325-4.139-4.124-7.418-8.758-7.418-4.849 0-8.791 3.585-8.791 7.995v1.598h-.88C3.547 22.412 0 25.637 0 29.607s3.546 7.195 7.913 7.195h25.495c2.91 0 5.276-2.15 5.276-4.796 0-2.049-1.418-3.802-3.412-4.487Zm-1.864 7.683H7.913c-3.394 0-6.155-2.51-6.155-5.596 0-3.085 2.761-5.596 6.155-5.596h4.395v-1.599H10.55v-1.598c0-3.525 3.157-6.396 7.033-6.396 3.877 0 7.034 2.871 7.034 6.396v2.398h1.758v-.787c.172-.208.357-.406.568-.577l.002.002c.197-.158.405-.3.625-.427.02-.01.04-.018.055-.029.426-.237.898-.4 1.385-.493.053-.008.106-.019.158-.025.236-.038.481-.062.724-.062 2.424 0 4.396 1.792 4.396 3.997 0 .868-.312 1.599-.886 2.398h-.873v1.599h.88c1.939 0 3.516 1.434 3.516 3.198 0 1.763-1.577 3.197-3.517 3.197Z"
      />
      <path fill="url(#c)" d="M7.913 38.401H30.77V40H7.913v-1.599Z" />
      <path
        fill="url(#d)"
        d="m4.799 11.495.176.556c.16.504.59.895 1.145 1.04l.609.16c.405.105.405.628 0 .734l-.61.16c-.553.144-.984.537-1.144 1.04l-.176.555c-.117.368-.69.368-.806 0l-.176-.556c-.16-.502-.591-.895-1.145-1.039l-.61-.16a.374.374 0 0 1 0-.735l.61-.158c.554-.146.984-.54 1.145-1.041l.176-.556c.117-.366.69-.366.806 0Z"
      />
      <path
        fill="url(#e)"
        d="m9.655 4.381.206.648c.185.587.689 1.047 1.335 1.216l.714.185c.472.125.472.735 0 .858l-.714.187c-.646.169-1.15.627-1.335 1.214l-.206.65c-.135.428-.806.428-.943 0l-.204-.65c-.186-.587-.692-1.045-1.337-1.214l-.712-.187c-.474-.123-.474-.733 0-.858l.712-.185c.645-.169 1.151-.629 1.337-1.216l.204-.648c.137-.43.808-.43.943 0Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="31.611"
          x2="31.611"
          y1=".777"
          y2="23.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAEE83" />
          <stop offset="1" stopColor="#FDC599" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="19.342"
          x2="19.342"
          y1="11.886"
          y2="40.533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9E021" />
          <stop offset="1" stopColor="#FB872B" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="19.342"
          x2="19.342"
          y1="11.886"
          y2="40.533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9E021" />
          <stop offset="1" stopColor="#FB872B" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="4.396"
          x2="4.396"
          y1="11.654"
          y2="15.533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAEE83" />
          <stop offset="1" stopColor="#FDC599" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="9.184"
          x2="9.184"
          y1="3.954"
          y2="9.049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAEE83" />
          <stop offset="1" stopColor="#FDC599" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrandLogo;