import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Noticia from '../../data/useNoticiasFiltradas';
import styles from './styles';
import { formatarData, formatarEditoriais, obterUrlImagem } from '../CardNoticia';

interface NoticiaProps {
    noticia: Noticia
    voltar: () => void
}

function InfosNoticia(props: NoticiaProps) {
    const noticia = props.noticia;
    const urlImagem = obterUrlImagem(noticia.imagens);
    const editoriaisFormatados = formatarEditoriais(noticia.editorias);
    const dataFormatada = formatarData(noticia.data_publicacao);

    const abrirLinkExterno = () => {
        Linking.openURL(noticia.link);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: urlImagem }} style={styles.image} resizeMode="cover" />
            <View style={styles.content}>
                <Text style={styles.title}>{noticia.titulo}</Text>
                <Text style={styles.description}>{noticia.introducao}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{editoriaisFormatados} - {dataFormatada}</Text>
                    <TouchableOpacity onPress={abrirLinkExterno} style={styles.button}>
                        <Text style={styles.buttonText}>Ver mais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.voltar()} style={styles.button}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};

export default InfosNoticia;
