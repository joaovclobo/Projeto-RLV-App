import { View, Text, FlatList } from 'react-native';
import CardNoticia from '../../components/CardNoticia';
import Noticia from '../../data/useNoticiasFiltradas'
import useNoticiasFiltradas from '../../data/useNoticiasFiltradas';
import styles from './styles';

interface ItemList {
    item: Noticia;
}

function Noticias() {

    const { noticias } = useNoticiasFiltradas()

    const renderNoticia = ({item}: ItemList) => (
        <CardNoticia noticia={item} />
    )

    return (
        <View style={styles.content}>
            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={noticias}
                renderItem={renderNoticia}
                keyExtractor={item => String(item.id)}
            />
        </View>
    )
}

export default Noticias;
