//https://wasdk.github.io/WasmFiddle/?1c9llh
int count_number_two(int from_num, int to_num){
    int count = 0;

    for(int i=from_num;i<=to_num;i++){
        int tmp = i;
        do{
            int test = tmp % 10;
            if (test == 2){
                count++;
            }
            tmp = tmp/10;
        }while(tmp);
    }
    return count;
}