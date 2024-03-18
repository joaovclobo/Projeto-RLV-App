import { View, Text, FlatList } from 'react-native';
import CardNoticia from '../../components/CardNoticia';
import Noticia from '../../data/useNoticiasFiltradas'
import useNoticiasFiltradas from '../../data/useNoticiasFiltradas';
import styles from './styles';
import InfosNoticia from '../../components/InfosNoticia';

interface ItemList {
    item: Noticia;
}

function Noticias() {

    const { processando, noticias, noticiaSelecionada, selecionarNoticia, voltar, defineFiltros } = useNoticiasFiltradas()

    const renderNoticia = ({item}: ItemList) => (
        <CardNoticia noticia={item} selecionar={selecionarNoticia} />
    )

    return (
        <View style={styles.content}>
            {processando ? (
                <Text style={styles.aviso}>Buscando notícias...</Text>
            ) : noticiaSelecionada != null ?(
                <InfosNoticia noticia={noticiaSelecionada} voltar={voltar} />
            ) : noticias.length > 0 ? (
                <View>
                <FlatList
                    style={styles.flatList}
                    showsVerticalScrollIndicator={false}
                    data={noticias}
                    renderItem={renderNoticia}
                    keyExtractor={item => String(item.id)}
                />
            </View>
            ) : (
                <Text style={styles.aviso}>Notícias não encontradas... Tente novamente!</Text>
            )}

        </View>
    )
}

export default Noticias;


