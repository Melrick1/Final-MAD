import { View, StyleSheet } from "react-native";
import { HistoryItem } from "../../components/molecules";
import { Gap } from "../../components/atoms";

const historyData = [
  {
    id: '1',
    name: 'Nama Hama',
    type: 'Jenis Hama',
    date: '01/18/25',
    time: '03:15 PM'
  },
  {
    id: '2',
    name: 'Nama Hama',
    type: 'Jenis Hama',
    date: '01/16/25',
    time: '09:53 PM'
  },
  {
    id: '3',
    name: 'Nama Hama',
    type: 'Jenis Hama',
    date: '23/11/24',
    time: '08:00 AM'
  },
  {
    id: '4',
    name: 'Nama Hama',
    type: 'Jenis Hama',
    date: '23/11/24',
    time: '07:57 AM'
  },
];

const HistoryList = () => {
  return (
    <View style={styles.container}>
      <Gap height={7}/>
      {historyData.map((item) => (
        <HistoryItem key={item.id} 
          name={item.name} 
          type={item.type}
          date={item.date}
          time={item.time}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2eac8', 
  },
});

export default HistoryList;
