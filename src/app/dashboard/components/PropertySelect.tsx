import Select from 'react-select';

const PropertySelect =(props: any) => {
    const {setProperty} = props;

    const options = [
        { value: 'syc', label: 'Sycamore Landing' },
        { value: 'kensington', label: 'Kensington Place' },
        { value: 'parkplace', label: 'Park Place' }
    ];

    const handleSelect = ({value}) => {
        setProperty(value);
    }

    return (
        <div>
            <Select onChange={handleSelect} options={options} />
        </div>
    );
}

export default PropertySelect;