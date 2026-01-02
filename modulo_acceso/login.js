<%@ page contentType="text/html;charset=UTF-8" %>
<%
    String usuario = request.getParameter("usuario");
    String password = request.getParameter("password");

    // ⚠️ EJEMPLO SIMPLE (luego se hace con BBDD)
    if ("alumno".equals(usuario) && "1234".equals(password)) {
        session.setAttribute("rol", "alumno");
    } else if ("profesor".equals(usuario) && "1234".equals(password)) {
        session.setAttribute("rol", "profesor");
    } else if ("direccion".equals(usuario) && "1234".equals(password)) {
        session.setAttribute("rol", "direccion");
    } else {
        response.sendRedirect("login.jsp?error=1");
        return;
    }

    // Redirección INTERNA (no visible)
    response.sendRedirect("index.jsp");
%>
