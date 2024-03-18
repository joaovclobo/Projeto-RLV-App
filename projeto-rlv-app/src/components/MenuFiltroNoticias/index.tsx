import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

interface MenuFiltroNoticiasProps {
    defineFiltros: (filtros: any) => void;
}

const MenuFiltroNoticias: React.FC<MenuFiltroNoticiasProps> = (props) => {
    const { defineFiltros } = props;
    const { register, handleSubmit, setValue } = useForm();

    const [selectedField, setSelectedField] = useState('');
    const [tipo, setTipo] = useState('Notícias');
    const [dataMinima, setDataMinima] = useState('');
    const [dataMaxima, setDataMaxima] = useState('');

    const handleSelectChange = (value: string) => {
        setSelectedField(value);
        setValue('dataMinima', '');
        setValue('dataMaxima', '');
        setValue('palavraChave', '');
        setValue('tipo', '');
    };

    const handleTipoChange = (itemValue: string) => {
        setTipo(itemValue);
        setValue('tipo', itemValue);
    };

    const handleFiltroNoticias = (filtros: any) => {
        defineFiltros(filtros);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Busca de notícias</Text>
            <View style={styles.form}>
                <View style={styles.select}>
                    <Picker
                        selectedValue={selectedField}
                        onValueChange={(itemValue) => handleSelectChange(itemValue)}
                    >
                        <Picker.Item label="Escolha o campo de busca" value="" />
                        <Picker.Item label="Data mínima de publicação" value="dataMinima" />
                        <Picker.Item label="Data máxima de publicação" value="dataMaxima" />
                        <Picker.Item label="Palavra chave" value="palavraChave" />
                        <Picker.Item label="Tipo de conteúdo" value="tipo" />
                    </Picker>
                </View>
                {selectedField === 'dataMinima' && (
                    <TextInputMask
                        style={styles.input}
                        placeholder="Data mínima de publicação"
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY',
                        }}
                        value={dataMinima}
                        onChangeText={(text) => {
                            setDataMinima(text);
                            setValue('dataMinima', text);
                        }}
                    />
                )}
                {selectedField === 'dataMaxima' && (
                    <TextInputMask
                        style={styles.input}
                        placeholder="Data máxima de publicação"
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY',
                        }}
                        value={dataMaxima}
                        onChangeText={(text) => {
                            setDataMaxima(text);
                            setValue('dataMaxima', text);
                        }}
                    />
                )}
                {selectedField === 'palavraChave' && (
                    <TextInput
                        style={styles.input}
                        placeholder="Palavra chave"
                        onChangeText={(text) => setValue('palavraChave', text)}
                    />
                )}
                {selectedField === 'tipo' && (
                    <View style={styles.select}>
                        <Picker
                            selectedValue={tipo}
                            onValueChange={handleTipoChange}
                        >
                            <Picker.Item label="Notícias" value="Notícias" />
                            <Picker.Item label="Releases" value="Releases" />
                        </Picker>
                    </View>
                )}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(handleFiltroNoticias)}
                >
                    <Text style={styles.buttonText}>Filtrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MenuFiltroNoticias;
