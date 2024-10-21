import time

def slow_print(text, delay=0.05):
    for char in text:
        print(char, end='', flush=True)
        time.sleep(delay)
    print()

slow_print("Olá, Grazi!\n")
time.sleep(2)

slow_print("Ta aprendendo python, aí sim...")
time.sleep(1)

##slow_print("Bom que distrai de quando te derrubei no basquete!...")
##time.sleep(1)

slow_print("kkkkkkkkkkkkkkkkkkkkkk\n")
time.sleep(1)

livro = input(f"Certo, Grazi! Qual o melhor livro que você leu?\n ")
lugar_sonho = input("Se você pudesse viajar agora, pra onde seria?\n ")

time.sleep(1)
slow_print(f"Hmmm... interessante!")
time.sleep(2)

slow_print("Agora, aqui vai a surpresa...\n")
time.sleep(3)

mensagem_surpresa = f"""
Grazi Crocheteira!

{livro} é o seu livro favorito e sonha em visitar {lugar_sonho}. 
Espero que um dia você possa ir para lá e aproveitar muito!

Essa pequena mensagem foi só um jeito de te fazer sorrir e lembrar o quanto você é incrivel.

Assinado, o cara que te derrubou no basquete 💖
JP
"""

slow_print(mensagem_surpresa)
