import { View, Text, Image } from 'react-native';
import Noticia from '../../data/useNoticiasFiltradas'
import styles from './styles';

interface NoticiaProps {
    noticia: Noticia
}

function CardNoticia ({noticia}: NoticiaProps) {

    return (
        <View style={styles.card}>
            {/* <Image style={styles.image} source={{ uri: notici.image }}/> */}
            <Text style={styles.title}>{noticia.titulo}</Text>
            <Text style={styles.data}>{noticia.data_publicacao}</Text>
        </View>
    )
};

export default CardNoticia;
