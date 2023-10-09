import Link from 'next/link';
import Checkbox from '../checkbox';
import { StyledWrapper } from './style';

// interface SignUpTermsCheckBoxesProps {
//   setTermsOfService: (e: boolean) => void;
//   setPrivacyPolicy: (e: boolean) => void;
// }

const SignUpTermsCheckBoxes: React.FC = () => {
  return (
    <StyledWrapper>
      <Checkbox htmlFor="termsOfService" required>
        <Link href="/terms-of-service" target="blank">
          이용약관
        </Link>
        에 동의합니다. (필수)
      </Checkbox>
      <Checkbox htmlFor="privacyPolicy" required>
        <Link href="/privacy-policy" target="blank">
          개인정보처리방침
        </Link>
        에 동의합니다. (필수)
      </Checkbox>
    </StyledWrapper>
  );
};

export default SignUpTermsCheckBoxes;
