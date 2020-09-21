
#include "naveen.h"
#include<fstream> // for writing into a file 
#include<ctime>
int main(){
	
	
	//asking for length
    int length;
	cout<<"please enter length of your password"<<endl;
	cin>> length;
	//creating a source file 
	char source[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?";
	// writing password into a file 
	 ofstream outfile;
	 outfile.open("password.txt");
	// writing each character
	 srand (time(NULL));
	for(int i = 0; i < length; i++  ){
		// random number generation btw 1 and 71
		int randomNumber = rand() % 72;
		// writing character to output file 
		outfile << source[randomNumber];
	}
	cout<<"done";
return 0;	
}





