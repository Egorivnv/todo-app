class DataList {

    getNext (curDate){
        let dataRange = [];
        dataRange[0]=curDate.toLocaleDateString();
        for (var i =1; i<15; i++) {
            curDate.setDate(curDate.getDate() + 1);
            dataRange[i]=curDate.toLocaleDateString();
        }
        return dataRange;
    }

    getPrev (curDate){
        let dataRange = [];
        dataRange[0]=curDate.toLocaleDateString();
        for (var i =0; i<10; i++) {
            curDate.setDate(curDate.getDate() - 1);
            dataRange[i]=curDate.toLocaleDateString();
        }
        return dataRange;
    }
}

export default DataList;
