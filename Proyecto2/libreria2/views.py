
from django.shortcuts import render, redirect
from .models import Libro
from .forms import LibroForm

def crear_libro(request):
    if request.method == 'POST':
        form = LibroForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('listar_libros')
    else:
        form = LibroForm()
    return render(request, 'myapp/crear_libro.html', {'form': form})
# myapp/views.py
def listar_libros(request):
    libros = Libro.objects.all()
    return render(request, 'myapp/listar_libros.html', {'libros': libros})
# myapp/views.py
def editar_libro(request, pk):
    libro = Libro.objects.get(pk=pk)
    if request.method == 'POST':
        form = LibroForm(request.POST, instance=libro)
        if form.is_valid():
            form.save()
            return redirect('listar_libros')
    else:
        form = LibroForm(instance=libro)
    return render(request, 'myapp/editar_libro.html', {'form': form})
# myapp/views.py
def eliminar_libro(request, pk):
    libro = Libro.objects.get(pk=pk)
    if request.method == 'POST':
        libro.delete()
        return redirect('listar_libros')
    return render(request, 'myapp/eliminar_libro.html', {'libro': libro})
