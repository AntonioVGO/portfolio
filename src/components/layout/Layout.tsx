
import { ButtonDarkMode } from '../atom/button/ButtonDarkMode.components';
import { Footer } from '../organisms/Footer.components';
import { Header } from '../organisms/Header.components';

interface LayoutProps {
    children?: any,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="h-full">
                <ButtonDarkMode>
                    <div className="min-w-[374px] h-full bg-gradient-to-tl from-rose-500 to-indigo-700">
                        <Header />
                        <div className="h-full">{children}</div>
                        <Footer />
                    </div>
                </ButtonDarkMode>
            </div>
        </>
    )
}

export default Layout;