import { Container, MoviesHeader, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieSection } from '../../components/MovieSection';
import { Tag } from '../../components/Tag';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <Container>
            <Header />
            <MoviesHeader>
                <h1>My Movies</h1>
                <Link to="/create-movie">
                    <Button style={{ width: '207px', height: '48px' }}
                        title="Add movie"
                        icon={FiPlus} />
                </Link>
            </MoviesHeader>
            <Content>
                <Link to="/movie-preview/:id">
                    <MovieSection
                        title="Iterestrellar"
                        rating={3}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero varius, scelerisque urna a, consequat risus. Curabitur eleifend eros non lorem tempor, vel facilisis ipsum consequat. Nulla facilisi. Phasellus ac ligula id nisi ullamcorper tincidunt. Vivamus at justo vel ligula sollicitudin fringilla sit amet a ligula. Sed ut dui at erat suscipit suscipit. Suspendisse potenti. Sed egestas nisl a arcu pulvinar, at luctus erat malesuada.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec fringilla nisi. Integer convallis urna ac sapien dapibus, non consectetur felis accumsan. Ut non libero at erat sollicitudin mollis. Nulla nec magna eget tortor dapibus tincidunt. Donec vitae risus purus. Morbi sed ex nec eros gravida malesuada. Aliquam erat volutpat. Cras ultricies mauris in lorem condimentum, id cursus arcu vulputate."
                    >
                        <Tag
                            key={1}
                            title="Acao"
                        />
                        <Tag
                            key={2}
                            title="Drama"
                        />
                    </MovieSection>

                    <MovieSection
                        title="Youuu"
                        rating={1}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero varius, scelerisque urna a, consequat risus. Curabitur eleifend eros non lorem tempor, vel facilisis ipsum consequat. Nulla facilisi. Phasellus ac ligula id nisi ullamcorper tincidunt. Vivamus at justo vel ligula sollicitudin fringilla sit amet a ligula. Sed ut dui at erat suscipit suscipit. Suspendisse potenti. Sed egestas nisl a arcu pulvinar, at luctus erat malesuada.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec fringilla nisi. Integer convallis urna ac sapien dapibus, non consectetur felis accumsan. Ut non libero at erat sollicitudin mollis. Nulla nec magna eget tortor dapibus tincidunt. Donec vitae risus purus. Morbi sed ex nec eros gravida malesuada. Aliquam erat volutpat. Cras ultricies mauris in lorem condimentum, id cursus arcu vulputate."
                    >
                        <Tag
                            key={1}
                            title="Acao"
                        />
                        <Tag
                            key={2}
                            title="Drama"
                        />
                    </MovieSection>

                    <MovieSection
                        title="Hour"
                        rating={3}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero varius, scelerisque urna a, consequat risus. Curabitur eleifend eros non lorem tempor, vel facilisis ipsum consequat. Nulla facilisi. Phasellus ac ligula id nisi ullamcorper tincidunt. Vivamus at justo vel ligula sollicitudin fringilla sit amet a ligula. Sed ut dui at erat suscipit suscipit. Suspendisse potenti. Sed egestas nisl a arcu pulvinar, at luctus erat malesuada.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec fringilla nisi. Integer convallis urna ac sapien dapibus, non consectetur felis accumsan. Ut non libero at erat sollicitudin mollis. Nulla nec magna eget tortor dapibus tincidunt. Donec vitae risus purus. Morbi sed ex nec eros gravida malesuada. Aliquam erat volutpat. Cras ultricies mauris in lorem condimentum, id cursus arcu vulputate."
                    >
                    </MovieSection>

                    <MovieSection
                        title="Before"
                        rating={4}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero varius, scelerisque urna a, consequat risus. Curabitur eleifend eros non lorem tempor, vel facilisis ipsum consequat. Nulla facilisi. Phasellus ac ligula id nisi ullamcorper tincidunt. Vivamus at justo vel ligula sollicitudin fringilla sit amet a ligula. Sed ut dui at erat suscipit suscipit. Suspendisse potenti. Sed egestas nisl a arcu pulvinar, at luctus erat malesuada.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec fringilla nisi. Integer convallis urna ac sapien dapibus, non consectetur felis accumsan. Ut non libero at erat sollicitudin mollis. Nulla nec magna eget tortor dapibus tincidunt. Donec vitae risus purus. Morbi sed ex nec eros gravida malesuada. Aliquam erat volutpat. Cras ultricies mauris in lorem condimentum, id cursus arcu vulputate."
                    >

                        <Tag
                            key={6}
                            title="Drama"
                        />
                    </MovieSection>
                </Link>
            </Content>
        </Container>
    );
} 