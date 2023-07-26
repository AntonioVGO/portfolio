
import { ButtonDarkMode } from '../atom/button/ButtonDarkMode.components';
import { Footer } from '../organisms/Footer.components';
import { Header } from '../organisms/Header.components';

interface LayoutProps {
    children?: any,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div>
                <ButtonDarkMode>
                    <div className="min-w-[374px] bg-gradient-to-tl from-rose-500 to-indigo-700">
                        <Header />
                        <div className="h-full min-h-screen">{children}</div>
                        <Footer />
                    </div>
                </ButtonDarkMode>
            </div>
        </>
    )
}

export default Layout;