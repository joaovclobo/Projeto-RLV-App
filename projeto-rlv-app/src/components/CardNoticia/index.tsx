import { View, Text, Image, TouchableOpacity } from 'react-native';
import Noticia from '../../data/useNoticiasFiltradas'
import styles from './styles';
import { parse, format } from 'date-fns';

interface NoticiaProps {
    noticia: Noticia
    selecionar: (noticia: any) => void
}

export function formatarData(dataPublicacao: string): string {
    const data = parse(dataPublicacao, 'dd/MM/yyyy HH:mm:ss', new Date());
    return format(data, 'dd/MM/yyyy');
}

export function formatarEditoriais(editorias: string): string {
    const editoriais = editorias.split(";");
    return editoriais.map(valor => valor.toUpperCase()).join(", ");
}

export function obterUrlImagem(imagens: string): string {
    let urlImagem = 'https://agenciadenoticias.ibge.gov.br/';
    const fimUrlDefault = 'images/agenciadenoticias/ibge/AgNot_menor.jpg'

    if (imagens != ''){
        const imagemObjeto = JSON.parse(imagens);

        if (imagemObjeto.image_intro != ''){
            urlImagem += imagemObjeto.image_intro            

        } else {
            urlImagem += fimUrlDefault
        }
    }
    return urlImagem
}

function CardNoticia (props: NoticiaProps) {
    const noticia = props.noticia;
    const urlImagem = obterUrlImagem(noticia.imagens);
    const editoriaisFormatados = formatarEditoriais(noticia.editorias);
    const dataFormatada = formatarData(noticia.data_publicacao);

    return (
        <View style={styles.card}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.selecionar(noticia)}> 
                <Image style={styles.image} source={{ uri: urlImagem }}/>
                <Text style={styles.title}>{noticia.titulo}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{formatarEditoriais(editoriaisFormatados)}</Text>
            <Text style={styles.data}>{dataFormatada}</Text>
        </View>
    )
};

export default CardNoticia;
