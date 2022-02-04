using System;

namespace operatorler
{
    class Program
    {
        static void Main(string[] args)
        {
            // Atama ve İşlemli Atama
            int x = 3;
            int y = 3;
            y = y+2;
            Console.WriteLine(y);
            y += 2;
            Console.WriteLine(y);
            y /= 1;
            Console.WriteLine(y);
            x *= 2;
            Console.WriteLine(x);

            //Mantıksal Operatörler
            // ||, &&, !

            bool isSuccess = true;
            bool isCompleted = true;

            if (isSuccess && isCompleted)
            {
                Console.WriteLine("Perfect!");  
            }

            if (isSuccess || isCompleted)
            {
                Console.WriteLine("Great!");  
            }

            if (isSuccess && !isCompleted)
            {
                Console.WriteLine("Fine!");  
            }


            // İlişkisel Operatörler

            int a = 3;
            int b = 4;
            bool sonuc1 = a < b;
            Console.WriteLine(sonuc1);

            bool sonuc2 = a > b;
            Console.WriteLine(sonuc2);

            bool sonuc3 = a == b;
            Console.WriteLine(sonuc3);

            bool sonuc4 = a != b;
            Console.WriteLine(sonuc4);

            // Aritmetik Operatörler

            int sayi1 = 10;
            int sayi2 = 5;
            int sonuc5 = sayi1/sayi2;
            Console.WriteLine(sonuc5);

        }
    }
}
