
import Layout from '../../components/layout/Layout';
import { WeatherCard } from '../../components/organisms/WeatherCard.components';

export const Weather2 = () => {

    return (
        <>
            <Layout>
                <div className="flex justify-center">
                    <WeatherCard />
                </div>
            </Layout>

        </>
    )
}